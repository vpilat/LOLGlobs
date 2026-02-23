---
Name: python3
Description: "Python 3 interpreter on macOS. Available via Xcode CLI tools or Homebrew. Enables arbitrary code execution and network operations."
Platform: macos
BinaryPath:
  - /usr/bin/python3
  - /usr/local/bin/python3
  - /opt/homebrew/bin/python3
Category: execution
MitreID: T1059.006
Patterns:
  - Pattern: "python?"
    Wildcards: ["?"]
    Notes: "Matches python3, python2 etc."
  - Pattern: "p?thon3"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'y'"
  - Pattern: "py*3"
    Wildcards: ["*"]
    Notes: "Star matches 'thon'"
  - Pattern: "pyth[o]n3"
    Wildcards: ["[]"]
    Notes: "Bracket class on 'o'"
  - Pattern: "python[3]"
    Wildcards: ["[]"]
    Notes: "Bracket class on version digit"
  - Pattern: "/usr/bin/python?"
    Wildcards: ["?"]
    Notes: "Full path wildcard on version"
  - Pattern: "/???/bin/p*3"
    Wildcards: ["?", "*"]
    Notes: "Full path mixed wildcards"
  - Pattern: "/opt/homebrew/bin/python?"
    Wildcards: ["?"]
    Notes: "Homebrew install path"
PlatformNotes: |
  On macOS, `/usr/bin/python3` may require Xcode CLI tools. Apple Silicon Macs use `/opt/homebrew/bin/python3` for Homebrew installs. Use full paths for reliability.
Resources:
  - https://attack.mitre.org/techniques/T1059/006/
  - https://docs.python.org/3/
---
