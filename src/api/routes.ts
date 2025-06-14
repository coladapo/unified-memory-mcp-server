import { Router } from 'express';
import { memoryEngine } from '../index';
import { ConversationCapture } from '../types';

const router = Router();

/**
 * POST /api/capture
 * Capture a conversation from any platform
 */
router.post('/capture', async (req, res) => {
  try {
    const capture: ConversationCapture = req.body;
    const result = await memoryEngine.captureConversation(capture);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * GET /api/context
 * Get relevant context for a query
 */
router.get('/context', async (req, res) => {
  try {
    const { query, platform } = req.query as { query: string; platform: string };
    const context = await memoryEngine.getRelevantContext(query, platform);
    res.json({ success: true, data: context });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;