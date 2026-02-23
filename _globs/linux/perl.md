---
Name: perl
Description: "Perl interpreter. Supports arbitrary code execution, file I/O, network operations — useful for one-liner payloads and reverse shells."
Platform: linux
BinaryPath:
  - /usr/bin/perl
  - /usr/local/bin/perl
Category: execution
MitreID: T1059
Patterns:
  - Pattern: "per?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'l'"
  - Pattern: "p*l"
    Wildcards: ["*"]
    Notes: "Star matches 'er'"
  - Pattern: "pe[r]l"
    Wildcards: ["[]"]
    Notes: "Bracket class on third char"
  - Pattern: "p?rl"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'e'"
  - Pattern: "per[l]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/usr/bin/per?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/p*l"
    Wildcards: ["?", "*"]
    Notes: "Full path mixed wildcards"
Resources:
  - https://attack.mitre.org/techniques/T1059/
  - https://perldoc.perl.org/
---
