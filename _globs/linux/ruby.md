---
Name: ruby
Description: "Ruby interpreter. Can be used for arbitrary code execution, reverse shells, and file operations."
Platform: linux
BinaryPath:
  - /usr/bin/ruby
  - /usr/local/bin/ruby
Category: execution
MitreID: T1059
Patterns:
  - Pattern: "rub?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'y'"
  - Pattern: "r*y"
    Wildcards: ["*"]
    Notes: "Star matches 'ub'"
  - Pattern: "ru[b]y"
    Wildcards: ["[]"]
    Notes: "Bracket class on third char"
  - Pattern: "r?by"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'u'"
  - Pattern: "rub[y]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/usr/bin/rub?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/???/r*y"
    Wildcards: ["?", "*"]
    Notes: "Full path mixed wildcards"
Resources:
  - https://attack.mitre.org/techniques/T1059/
  - https://www.ruby-lang.org/
---
