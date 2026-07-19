/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON Parser
  app.use(express.json());

  // In-memory submissions store
  let submissions = [
    {
      id: 'sub-1',
      name: 'Jonathan Vance',
      email: 'j.vance@vanguardrefining.com',
      company: 'Vanguard Refining Corp',
      phone: '+1 (555) 019-2834',
      serviceInterest: 'Precision Structural Fabrication',
      message: 'We are preparing an RFP tender for structural steel node replacements on our Gulf Coast refinery. Please provide details on standard carbon-steel lead times for assemblies weighing over 50 Metric Tons.',
      createdAt: '2026-07-18T14:32:00.000Z',
      status: 'unread'
    },
    {
      id: 'sub-2',
      name: 'Helena Rostova',
      email: 'h.rostova@nsenergy.no',
      company: 'North Sea Energy Partners',
      phone: '+47 23 81 00 22',
      serviceInterest: 'High-Pressure Hydraulic Systems',
      message: 'Urgent inquiry: We require technical specification documentation and pressure tolerance certification records for the 700 Bar HPU control manifolds. Please route this to our marine engineering division.',
      createdAt: '2026-07-19T06:10:00.000Z',
      status: 'contacted'
    }
  ];

  // API Endpoints
  app.get('/api/contact/submissions', (req, res) => {
    res.json(submissions);
  });

  app.post('/api/contact/submit', (req, res) => {
    const { name, email, company, phone, serviceInterest, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields.' });
    }

    const newSubmission = {
      id: `sub-${Date.now()}`,
      name,
      email,
      company: company || 'N/A',
      phone: phone || 'N/A',
      serviceInterest: serviceInterest || 'General Inquiry',
      message,
      createdAt: new Date().toISOString(),
      status: 'unread'
    };

    submissions.unshift(newSubmission);
    res.status(201).json({ success: true, submission: newSubmission });
  });

  app.put('/api/contact/submissions/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const submission = submissions.find(s => s.id === id);
    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    if (status) {
      submission.status = status;
    }

    res.json({ success: true, submission });
  });

  app.delete('/api/contact/submissions/:id', (req, res) => {
    const { id } = req.params;
    const index = submissions.findIndex(s => s.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    submissions.splice(index, 1);
    res.json({ success: true });
  });

  // Dev server with Vite vs Production static asset handler
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Express server initialization failed:', err);
});
