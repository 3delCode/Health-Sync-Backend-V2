-- Migration: Add audit_logs table for HIPAA compliance
-- Date: 2024-01-15
-- Purpose: Track all medical data operations for security and compliance

USE health_sync;

-- Create audit_logs table
CREATE TABLE IF NOT EXISTS audit_logs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  event_type VARCHAR(100) NOT NULL,
  event_data JSON,
  ip_address VARCHAR(45),
  user_agent TEXT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_id (user_id),
  INDEX idx_event_type (event_type),
  INDEX idx_timestamp (timestamp),
  INDEX idx_user_event (user_id, event_type, timestamp)
);

-- Add comment for documentation
ALTER TABLE audit_logs COMMENT = 'HIPAA compliance audit log - retains records for 7 years';
