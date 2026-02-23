---
Name: open
Description: "Open files, URLs, or applications. Can launch applications, execute scripts via -a flag, or open URLs that trigger protocol handlers."
Platform: macos
BinaryPath:
  - /usr/bin/open
Category: execution
MitreID: T1218
Patterns:
  - Pattern: "ope?"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'n'"
  - Pattern: "o*n"
    Wildcards: ["*"]
    Notes: "Star matches 'pe'"
  - Pattern: "op[e]n"
    Wildcards: ["[]"]
    Notes: "Bracket class on third char"
  - Pattern: "o?en"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'p'"
  - Pattern: "ope[n]"
    Wildcards: ["[]"]
    Notes: "Bracket class on last char"
  - Pattern: "/usr/bin/ope?"
    Wildcards: ["?"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/o*n"
    Wildcards: ["?", "*"]
    Notes: "Full path mixed wildcards"
PlatformNotes: |
  macOS-exclusive command. `open -a Calculator` opens an app by name. `open -n -a /Applications/Utilities/Terminal.app` opens a new Terminal. Can also open URLs: `open https://...` which triggers the default browser.
Resources:
  - https://attack.mitre.org/techniques/T1218/
  - https://ss64.com/osx/open.html
---
