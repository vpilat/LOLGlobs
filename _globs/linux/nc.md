---
Name: nc
Description: "Netcat — the TCP/IP Swiss army knife. Used for port scanning, reverse shells, file transfers, and network pivoting."
Platform: linux
BinaryPath:
  - /bin/nc
  - /usr/bin/nc
  - /bin/netcat
  - /usr/bin/ncat
Category: execution
MitreID: T1059.004
Patterns:
  - Pattern: "n?"
    Wildcards: ["?"]
    Notes: "Single char wildcard — may match other n? binaries; use full path for precision"
  - Pattern: "n[c]"
    Wildcards: ["[]"]
    Notes: "Character class on second char"
  - Pattern: "/bin/n?"
    Wildcards: ["?"]
    Notes: "Full path narrows match to /bin/nc"
  - Pattern: "/???/bin/nc"
    Wildcards: ["?"]
    Notes: "Obfuscate /usr/ prefix"
  - Pattern: "/bin/n[c]"
    Wildcards: ["[]"]
    Notes: "Full path with bracket class"
  - Pattern: "net?at"
    Wildcards: ["?"]
    Notes: "Matches netcat with wildcard replacing 'c'"
  - Pattern: "nc*"
    Wildcards: ["*"]
    Notes: "Star suffix — matches nc, ncat, ncftp etc."
  - Pattern: "n[c]*"
    Wildcards: ["[]", "*"]
    Notes: "Bracket then star for ncat, ncat6 variants"
Resources:
  - https://attack.mitre.org/techniques/T1059/004/
  - https://nmap.org/ncat/
---
