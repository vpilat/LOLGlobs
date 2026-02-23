---
Name: rundll32
Description: "Loads and runs DLLs. Used to execute malicious DLL exports directly, bypassing application whitelisting."
Platform: windows-cmd
BinaryPath:
  - C:\Windows\System32\rundll32.exe
  - C:\Windows\SysWOW64\rundll32.exe
Category: execution
MitreID: T1218.011
Patterns:
  - Pattern: "for /f %i in ('where rundll3?.exe') do %i"
    Wildcards: ["?"]
    Notes: "Wildcard replaces '2'"
  - Pattern: "for /f %i in ('where r*32.exe') do %i"
    Wildcards: ["*"]
    Notes: "Star matches 'undll'"
  - Pattern: "for /f %i in ('where rundll*.exe') do %i"
    Wildcards: ["*"]
    Notes: "Star matches '32'"
  - Pattern: "for /f %i in ('dir /b C:\\Windows\\System32\\rundll*.exe') do %i"
    Wildcards: ["*"]
    Notes: "dir glob search"
Resources:
  - https://attack.mitre.org/techniques/T1218/011/
  - https://lolbas-project.github.io/lolbas/Binaries/Rundll32/
---
