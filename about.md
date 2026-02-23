---
layout: default
title: About LOLGlobs
description: "About the LOLGlobs project — methodology, platform behavior, and contribution guide"
---

<div class="about-page" markdown="1">

# About LOLGlobs

LOLGlobs is a reference catalog of **glob pattern evasion techniques** — using shell wildcards (`*`, `?`, `[]`) to launch system processes without typing the full command name. This approach can bypass signature-based detection systems (AV, EDR, WAF) that match literal command strings.

Inspired by [LOLBAS](https://lolbas-project.github.io) and [GTFOBins](https://gtfobins.github.io).

---

## What Is Glob Evasion?

Modern security tools often detect malicious activity by matching known command strings. For example, a rule might flag any process where the command line contains `certutil -urlcache`.

Glob evasion exploits the fact that most shells expand wildcard patterns **before** executing commands. So instead of typing `whoami`, an attacker types `w?oami` — the shell expands the wildcard to `whoami`, and the process executes normally. The literal string `whoami` never appears in the script.

```bash
# Instead of:
whoami

# Use:
w?oami       # Shell expands to: whoami
w*i          # Shell expands to: whoami
/???/???/w*  # Shell expands to: /usr/bin/whoami
```

---

## Platform Behavior

### Linux (bash)

Shell expands globs **before** executing. Pattern `w?oami` → shell finds matching file `whoami` → executes it.

Supports: `*` (any chars), `?` (single char), `[abc]` (char class), `[!abc]` (negated class), `{a,b}` (brace expansion), `**` (globstar, with `shopt -s globstar`).

Patterns that match no files are passed literally unless `nullglob` is set.

### macOS (zsh)

Similar to bash but zsh is stricter by default:
- Raises a `nomatch` error if a glob matches no files (instead of passing literal)
- Use `setopt NO_NOMATCH` to suppress errors
- Extended globs available with `setopt EXTENDED_GLOB`
- Most bash patterns work identically

### Windows CMD

**CMD does NOT expand wildcards in command position.** Unlike bash/zsh, `c*rtutil` will fail as a command in CMD.

The workaround — use `where.exe` or `dir /b` with wildcards, then execute the result:

```cmd
for /f %i in ('where c*rtutil.exe') do @%i -urlcache -f http://...
```

In batch scripts, use `%%i` instead of `%i`.

### PowerShell

PowerShell supports **cmdlet name wildcards** via `Get-Command`:

```powershell
& (Get-Command I*ke-W*R*) -Uri http://...
# Resolves: Invoke-WebRequest
```

Also supports alias wildcards via `Get-Alias`:

```powershell
& (Get-Alias ?e?) 'whoami'
# Alias 'iex' → Invoke-Expression
```

This technique is sometimes called **"globfuscation"**.

---

## Wildcard Reference

| Wildcard | Bash | zsh | CMD | PowerShell |
|----------|------|-----|-----|------------|
| `*` | Any chars | Any chars | With `where`/`dir` | Cmdlet resolution |
| `?` | Single char | Single char | With `where`/`dir` | Cmdlet resolution |
| `[abc]` | Char class | Char class | No | Cmdlet resolution |
| `[!abc]` | Negated class | Negated class | No | No |
| `{a,b}` | Brace expansion | Brace expansion | No | No |
| `**` | Globstar | Globstar | No | No |

---

## Use Cases

LOLGlobs documents these techniques for:

- **Defensive research** — understand attacker methods to improve detection rules
- **Red team / penetration testing** — authorized testing of detection capabilities
- **CTF competitions** — shell escaping and command injection challenges
- **Security education** — understanding shell internals and process execution

---

## Detection

To detect glob evasion:

1. **Process arguments monitoring** — Use EDR tools that capture resolved process names, not just command line strings
2. **Behavior-based rules** — Focus on what processes do (network connections, file writes) rather than names
3. **AMSI for PowerShell** — PowerShell's AMSI integration captures expanded/resolved commands
4. **Audit logging** — Linux `auditd` captures the resolved binary path in `execve()` calls

---

## Contributing

Submit new entries via [GitHub Issues](https://github.com/0xv1n/LOLGlobs/issues/new?template=new-entry.yml) using the structured template.

### Entry Requirements

- Must be a legitimate system binary or built-in command
- Must demonstrate at least 3 distinct glob patterns
- Patterns must actually work (tested on the target platform)
- Include MITRE ATT&CK technique ID where applicable
- Document any platform-specific caveats in `PlatformNotes`

### File Format

Entries are Markdown files with YAML front matter in `_globs/<platform>/`. Example:

```yaml
---
Name: whoami
Description: "Displays current username"
Platform: linux
BinaryPath:
  - /usr/bin/whoami
Category: discovery
MitreID: T1033
Patterns:
  - Pattern: "w?oami"
    Wildcards: ["?"]
    Notes: "Single char wildcard replaces 'h'"
Resources:
  - https://attack.mitre.org/techniques/T1033/
---
```

---

## Disclaimer

This project is for **educational and defensive security purposes only**. All techniques documented here are for understanding attacker methods to improve detection and response. Use responsibly and only on systems you have explicit authorization to test.

</div>
