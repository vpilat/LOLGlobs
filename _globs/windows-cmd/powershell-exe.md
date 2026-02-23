---
Name: powershell.exe
Description: "PowerShell executable launched from CMD. Bypasses CMD-level restrictions by delegating to PowerShell runtime."
Platform: windows-cmd
BinaryPath:
  - C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
  - C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell.exe
Category: execution
MitreID: T1059.001
Patterns:
  - Pattern: "for /f %i in ('where powers*') do %i -nop -w hidden -c IEX(...)"
    Wildcards: ["*"]
    Notes: "Star matches 'hell.exe'"
  - Pattern: "for /f %i in ('where power?hell.exe') do %i"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 's'"
  - Pattern: "for /f %i in ('where p*hell.exe') do %i"
    Wildcards: ["*"]
    Notes: "Star matches 'owers'"
  - Pattern: "for /f %i in ('dir /b C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\power*.exe') do %i"
    Wildcards: ["*"]
    Notes: "Full path dir glob"
Resources:
  - https://attack.mitre.org/techniques/T1059/001/
  - https://lolbas-project.github.io/lolbas/Binaries/Powershell/
---
