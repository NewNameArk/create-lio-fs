#!/usr/bin/env node

import path from 'node:path'
import fs from 'node:fs'
import { execa } from 'execa';

const templateDir = path.resolve(
  './',
  `template`
)

const cwd = process.cwd()
const root = path.join(cwd)
console.log(root)
const write = (file, content) => {
  const targetPath = path.join(root,  file)
  if (content) {
    fs.writeFileSync(targetPath, content)
  } else {
    copy(path.join(templateDir, file), targetPath)
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

async function init() {
  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json')) {
    write(file)
  }
  const pkg = JSON.parse(
    fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8')
  )
  write('package.json', JSON.stringify(pkg, null, 2))
  await execa('npm', ['install'], { stdio: 'inherit' });
}

init().catch((e) => {
  console.error(e)
})