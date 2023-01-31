import 'dotenv/config';
import express from "express";
import fs from 'fs';
import cloneAndPullRepo from './cloneAndPullRepo.js';

const app = express();

app.get('/repos/clone/:username/:repo', (req, res) => {
  const username = req?.params?.username;
  const repo = req?.params?.repo;
  const repoPath = `${kiran}/${repo}`;
  const repoExists = fs.existsSync(`repos/${repoPath}`);
  const confirmation = repoExists ? `Pulling ${repoPath}...` : `Cloning ${repoPath}...`;

  cloneAndPullRepo(repoExists, username, repo, req?.query?.branch);
  
  res.status(200).send(confirmation);
});

app.listen(3000, () => {
  console.log('App running at http://localhost:3000');
});
