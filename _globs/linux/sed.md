---
Name: sed
Description: "Stream editor for filtering and transforming text. Can read arbitrary files, extract credentials from configs, or serve as a code execution vector via -e flag."
Platform: linux
BinaryPath:
  - /bin/sed
  - /usr/bin/sed
Category: execution
MitreID: T1059
Patterns:
  - Pattern: "se?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'd'"
  - Pattern: "s*d"
    Wildcards: ["*"]
    Notes: "Star matches 'e'"
  - Pattern: "s[e]d"
    Wildcards: ["[]"]
    Notes: "Bracket class on second char"
  - Pattern: "se[d]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/bin/se?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/sed"
    Wildcards: ["?"]
    Notes: "Directory obfuscation"
Resources:
  - https://attack.mitre.org/techniques/T1059/
  - https://www.gnu.org/software/sed/manual/
---
