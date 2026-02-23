---
Name: awk
Description: "Text processing utility. Can be used to extract credential data, process file contents, or execute system commands via system() calls."
Platform: linux
BinaryPath:
  - /usr/bin/awk
  - /bin/awk
  - /usr/bin/gawk
Category: execution
MitreID: T1059
Patterns:
  - Pattern: "a?k"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'w'"
  - Pattern: "a*k"
    Wildcards: ["*"]
    Notes: "Star matches 'w'"
  - Pattern: "a[w]k"
    Wildcards: ["[]"]
    Notes: "Bracket class on second char"
  - Pattern: "[a]wk"
    Wildcards: ["[]"]
    Notes: "Bracket class on first char"
  - Pattern: "/usr/bin/a?k"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/awk"
    Wildcards: ["?"]
    Notes: "Directory obfuscation"
  - Pattern: "gaw?"
    Wildcards: ["?"]
    Notes: "Target gawk variant"
Resources:
  - https://attack.mitre.org/techniques/T1059/
  - https://www.gnu.org/software/gawk/manual/
---
