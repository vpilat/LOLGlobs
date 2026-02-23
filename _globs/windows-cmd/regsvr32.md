---
Name: regsvr32
Description: "Registers and unregisters OLE controls. Can execute remote scriptlets (scrobj.dll) — the 'Squiblydoo' technique."
Platform: windows-cmd
BinaryPath:
  - C:\Windows\System32\regsvr32.exe
  - C:\Windows\SysWOW64\regsvr32.exe
Category: execution
MitreID: T1218.010
Patterns:
  - Pattern: "for /f %i in ('where regsvr3?.exe') do %i"
    Wildcards: ["?"]
    Notes: "Wildcard replaces '2'"
  - Pattern: "for /f %i in ('where r*svr32.exe') do %i"
    Wildcards: ["*"]
    Notes: "Star replaces 'eg'"
  - Pattern: "for /f %i in ('where regsvr*.exe') do %i"
    Wildcards: ["*"]
    Notes: "Star matches '32'"
  - Pattern: "for /f %i in ('dir /b C:\\Windows\\System32\\regsvr*.exe') do %i"
    Wildcards: ["*"]
    Notes: "dir glob search"
Resources:
  - https://attack.mitre.org/techniques/T1218/010/
  - https://lolbas-project.github.io/lolbas/Binaries/Regsvr32/
---
