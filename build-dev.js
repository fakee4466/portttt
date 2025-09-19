#!/usr/bin/env node

// Development build script for Lovable
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function buildDev() {
  try {
    console.log('Running development build...');
    await execAsync('npx vite build --mode development');
    console.log('Development build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildDev();