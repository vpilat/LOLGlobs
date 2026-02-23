---
Name: socat
Description: "Multipurpose relay tool. More powerful than netcat — supports SSL, UDP, and complex socket operations. Commonly used for encrypted reverse shells and port forwarding."
Platform: linux
BinaryPath:
  - /usr/bin/socat
  - /usr/local/bin/socat
Category: execution
MitreID: T1059
Patterns:
  - Pattern: "soca?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 't'"
  - Pattern: "s*t"
    Wildcards: ["*"]
    Notes: "Star matches 'oca'"
  - Pattern: "so[c]at"
    Wildcards: ["[]"]
    Notes: "Bracket class on third char"
  - Pattern: "s?cat"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'o'"
  - Pattern: "soc[a]t"
    Wildcards: ["[]"]
    Notes: "Bracket class on fourth char"
  - Pattern: "/usr/bin/soca?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/s*t"
    Wildcards: ["?", "*"]
    Notes: "Full path mixed wildcards"
  - Pattern: "s?c*t"
    Wildcards: ["?", "*"]
    Notes: "Multiple wildcards in command"
Resources:
  - https://attack.mitre.org/techniques/T1059/
  - https://linux.die.net/man/1/socat
---
