---
Name: osascript
Description: "Execute AppleScript or JavaScript for Automation (JXA). Can control applications, access keychain, display prompts, and run system commands."
Platform: macos
BinaryPath:
  - /usr/bin/osascript
Category: execution
MitreID: T1059.002
Patterns:
  - Pattern: "osasc*"
    Wildcards: ["*"]
    Notes: "Star matches 'ript'"
  - Pattern: "o?ascript"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 's'"
  - Pattern: "osa?cript"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 's' in middle"
  - Pattern: "osascri?t"
    Wildcards: ["?"]
    Notes: "Wildcard replaces 'p'"
  - Pattern: "o*t"
    Wildcards: ["*"]
    Notes: "Aggressive star wildcard"
  - Pattern: "/usr/bin/osasc*"
    Wildcards: ["*"]
    Notes: "Full path wildcard"
  - Pattern: "/???/bin/o*t"
    Wildcards: ["?", "*"]
    Notes: "Full path mixed wildcards"
  - Pattern: "osascri[p]t"
    Wildcards: ["[]"]
    Notes: "Bracket class on 'p'"
PlatformNotes: |
  osascript is macOS-exclusive. Use `-e` flag to pass inline code: `osascript -e 'do shell script "id"'`. JXA mode available with `-l JavaScript`. Wildcard execution requires shell glob expansion — works in bash and zsh (with NO_NOMATCH set).
Resources:
  - https://attack.mitre.org/techniques/T1059/002/
  - https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptX/AppleScriptX.html
---
