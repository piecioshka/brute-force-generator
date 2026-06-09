Output demo/brute-force-generator.gif

Require brute-force-generator

Set Shell "bash"
Set Framerate 60
Set FontSize 12
Set Width 800
Set Height 400
Set Padding 20
Set Margin 5
Set MarginFill "#212830"
Set BorderRadius 10

Hide
Type 'cd /tmp/brute-force-generator-demo && clear' Enter
Show

Type "brute-force-generator --help" Sleep 200ms Enter
Wait Sleep 1500ms

Enter Enter Type "# build a 3-letter dictionary from the letters a, b" Sleep 200ms Enter Enter
Wait Sleep 1000ms

Type "brute-force-generator -a ab -l 3" Sleep 500ms Enter
Wait Sleep 2000ms

Sleep 3s
