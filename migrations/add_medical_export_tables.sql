-- Migration: Add tables for medical file export feature
-- Date: 2024-01-01

USE health_sync;

-- Create ai_chat_sessions table
CREATE TABLE IF NOT EXISTS ai_chat_sessions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  session_id VARCHAR(36) UNIQUE NOT NULL,
  messages JSON NOT NULL,
  medical_context JSON NOT NULL,
  diagnosis_result JSON,
  exported BOOLEAN DEFAULT FALSE,
  exported_at TIMESTAMP NULL,
  started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ended_at TIMESTAMP NULL,
  status ENUM('active', 'completed', 'abandoned') DEFAULT 'active',
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_session (user_id, session_id),
  INDEX idx_status (status)
);

-- Create medical_file_exports table
CREATE TABLE IF NOT EXISTS medical_file_exports (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  session_id VARCHAR(36),
  email VARCHAR(255) NOT NULL,
  pdf_path VARCHAR(500),
  file_size INT,
  exported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('pending', 'sent', 'failed') DEFAULT 'pending',
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_exports (user_id, exported_at)
);
