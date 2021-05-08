set -e

for i in $(ls -1 './lib/fonts/sources'); do
echo "$i"
if [[ $i = *.woff ]]; then
	pyftsubset "./lib/fonts/sources/$i" --output-file="./lib/fonts/$(basename "$i")" --flavor=woff --unicodes="U+0000-007F U+00A0 U+00A9 U+00AD U+00D7 U+00E0-00E1 U+00E3-00EB U+00ED-00EF U+00F2-00F6 U+00F8-00FC U+0101 U+0113 U+0117 U+0119 U+012B U+0300-0301 U+0327 U+2013 U+2018-2019 U+201C-201D U+2022 U+2026 U+20AC U+2191 U+2193 U+21D2 U+23E4 U+25A0 U+25AA U+26A1 U+30FB" --with-zopfli --ignore-missing-glyphs --ignore-missing-unicodes --layout-features='kern' --no-hinting --desubroutinize --name-IDs='' --drop-tables+=GSUB
fi;

if [[ $i == *.woff2 ]]; then
	pyftsubset "./lib/fonts/sources/$i" --output-file="./lib/fonts/$(basename "$i")" --flavor=woff2 --unicodes="U+0000-007F U+00A0 U+00A9 U+00AD U+00D7 U+00E0-00E1 U+00E3-00EB U+00ED-00EF U+00F2-00F6 U+00F8-00FC U+0101 U+0113 U+0117 U+0119 U+012B U+0300-0301 U+0327 U+2013 U+2018-2019 U+201C-201D U+2022 U+2026 U+20AC U+2191 U+2193 U+21D2 U+23E4 U+25A0 U+25AA U+26A1 U+30FB" --ignore-missing-glyphs --ignore-missing-unicodes --layout-features='kern' --no-hinting --desubroutinize --name-IDs='' --drop-tables+=GSUB
fi;
done;
