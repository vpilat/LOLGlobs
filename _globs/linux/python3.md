---
Name: python3
Description: "Python 3 interpreter. Enables arbitrary code execution, file operations, network connections, and more."
Platform: linux
BinaryPath:
  - /usr/bin/python3
  - /usr/bin/python3.x
  - /usr/local/bin/python3
Category: execution
MitreID: T1059.006
Patterns:
  - Pattern: "python?"
    Wildcards: ["?"]
    Notes: "Matches python3, python2, etc."
  - Pattern: "p?thon3"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'y'"
  - Pattern: "py*3"
    Wildcards: ["*"]
    Notes: "Star matches 'thon'"
  - Pattern: "pyth[o]n3"
    Wildcards: ["[]"]
    Notes: "Character class around 'o'"
  - Pattern: "p*3"
    Wildcards: ["*"]
    Notes: "Aggressive star wildcard"
  - Pattern: "python[3]"
    Wildcards: ["[]"]
    Notes: "Bracket class on version digit"
  - Pattern: "/usr/bin/python?"
    Wildcards: ["?"]
    Notes: "Full path wildcard on version"
  - Pattern: "/???/bin/p*3"
    Wildcards: ["?", "*"]
    Notes: "Full path with mixed wildcards"
  - Pattern: "py?hon3"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 't'"
  - Pattern: "/usr/*/python3"
    Wildcards: ["*"]
    Notes: "Wildcard in directory traversal"
Resources:
  - https://attack.mitre.org/techniques/T1059/006/
  - https://docs.python.org/3/
---
