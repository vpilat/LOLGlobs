---
Name: id
Description: "Print user and group information. Confirms current user UID, GID, and group memberships for privilege assessment."
Platform: linux
BinaryPath:
  - /usr/bin/id
  - /bin/id
Category: discovery
MitreID: T1033
Patterns:
  - Pattern: "[i]d"
    Wildcards: ["[]"]
    Notes: "Bracket class on first char"
  - Pattern: "i[d]"
    Wildcards: ["[]"]
    Notes: "Bracket class on second char"
  - Pattern: "/usr/bin/id"
    Wildcards: []
    Notes: "Full absolute path — avoids matching shell builtin 'id'"
  - Pattern: "/???/bin/id"
    Wildcards: ["?"]
    Notes: "Obfuscate /usr/ prefix"
  - Pattern: "/???/???/id"
    Wildcards: ["?"]
    Notes: "Full path component obfuscation"
  - Pattern: "/usr/*/id"
    Wildcards: ["*"]
    Notes: "Wildcard in bin directory"
Resources:
  - https://attack.mitre.org/techniques/T1033/
---
