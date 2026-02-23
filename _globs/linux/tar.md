---
Name: tar
Description: "Archive utility. Used to compress and exfiltrate data, or extract attacker-controlled archives that may include path traversal payloads."
Platform: linux
BinaryPath:
  - /bin/tar
  - /usr/bin/tar
Category: exfiltration
MitreID: T1560.001
Patterns:
  - Pattern: "ta?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'r'"
  - Pattern: "t*r"
    Wildcards: ["*"]
    Notes: "Star matches 'a'"
  - Pattern: "t[a]r"
    Wildcards: ["[]"]
    Notes: "Bracket class on second char"
  - Pattern: "ta[r]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/bin/ta?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/tar"
    Wildcards: ["?"]
    Notes: "Directory obfuscation"
  - Pattern: "/b?n/t*r"
    Wildcards: ["?", "*"]
    Notes: "Mixed wildcards"
Resources:
  - https://attack.mitre.org/techniques/T1560/001/
---
