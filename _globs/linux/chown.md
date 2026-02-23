---
Name: chown
Description: "Change file owner and group. Used to reassign ownership of files, directories, or setuid binaries."
Platform: linux
BinaryPath:
  - /bin/chown
  - /usr/bin/chown
Category: persistence
MitreID: T1222.002
Patterns:
  - Pattern: "chow?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'n'"
  - Pattern: "ch*n"
    Wildcards: ["*"]
    Notes: "Star matches 'ow'"
  - Pattern: "c?own"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'h'"
  - Pattern: "cho[w]n"
    Wildcards: ["[]"]
    Notes: "Bracket class on fourth char"
  - Pattern: "/bin/chow?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/chown"
    Wildcards: ["?"]
    Notes: "Directory obfuscation"
  - Pattern: "c*wn"
    Wildcards: ["*"]
    Notes: "Star wildcard for middle chars"
Resources:
  - https://attack.mitre.org/techniques/T1222/002/
---
