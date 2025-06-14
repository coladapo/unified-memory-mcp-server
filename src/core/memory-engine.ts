import { createClient } from '@supabase/supabase-js';
import { logger } from '../utils/logger';
import { ConversationCapture, Decision } from '../types';

export class UnifiedMemoryEngine {
  private supabase;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase configuration');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
    logger.info('Memory engine connected to Supabase');
  }

  /**
   * Capture a conversation from any platform
   */
  async captureConversation(capture: ConversationCapture) {
    try {
      const { data, error } = await this.supabase
        .from('conversations')
        .insert({
          platform: capture.platform,
          content: capture.content,
          context: capture.context,
          // TODO: Add embedding generation here
        })
        .select()
        .single();

      if (error) throw error;

      logger.info(`Captured conversation from ${capture.platform}`);
      
      // Extract decisions if present
      if (capture.extractDecisions) {
        await this.extractDecisions(data.id, capture.content);
      }

      return data;
    } catch (error) {
      logger.error('Failed to capture conversation:', error);
      throw error;
    }
  }

  /**
   * Get relevant context for a query
   */
  async getRelevantContext(query: string, platform: string) {
    try {
      // TODO: Implement vector similarity search
      // For now, return recent conversations
      const { data, error } = await this.supabase
        .from('conversations')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(5);

      if (error) throw error;

      return data;
    } catch (error) {
      logger.error('Failed to get relevant context:', error);
      throw error;
    }
  }

  /**
   * Extract decisions from conversation content
   */
  private async extractDecisions(conversationId: string, content: string) {
    // TODO: Implement LLM-powered extraction
    logger.info('Decision extraction not yet implemented');
  }
}