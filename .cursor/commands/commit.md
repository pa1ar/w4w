# Commit Command
This command analyzes staged changes and generates a concise, informative commit message following conventional commit standards. It then prompts for user confirmation before creating the commit and optionally pushing to the remote repository.

## How it Works
1. **Analysis**: Reviews staged changes using `git diff --cached`
2. **Generation**: Creates a concise commit message following conventional commit format
3. **Confirmation**: Shows the generated message and asks for user approval
4. **Execution**: Creates the commit and optionally pushes to remote

## Usage
- Run this command when you have staged changes ready to commit
- The command will analyze your changes and suggest an appropriate commit message
- You can approve, modify, or cancel the commit process

## Prerequisites
- Have files staged for commit (`git add`)
- Ensure you're in a git repository
- Have appropriate git configuration set up

## Expected Output
The command will:
- Show a summary of staged changes
- Display the generated commit message
- Present lettered options for quick responses:
  - `c`: approve and commit
  - `p`: approve and push to remote
  - `m [description]`: edit message and show updated options
- Execute the chosen action

## Commit Message Format
Generated messages follow conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for test additions/changes
- `chore:` for maintenance tasks

## Examples
```
feat: add metadata generation to chat pages
fix: resolve browser tab title inconsistency
refactor: improve prompt system with variable injection
docs: update API documentation
```

## Safety Features
- Always shows generated message before committing
- Requires explicit user confirmation
- Can be cancelled at any time
- Validates git status before proceeding
