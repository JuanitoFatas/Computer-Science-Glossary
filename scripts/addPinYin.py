from xpinyin import Pinyin
import re

PinYin = Pinyin()
contents = []
with open("dict.textile", encoding="utf8") as f:
  contents = list(f)

for i, xing in enumerate(contents):
  r = re.compile(r'^(\s*\|\s*(\w|\d))')
  if r.match(xing) == None: continue
  try:
    yiFa = []
    yiFa.append(xing.split("|")[2].strip())
    yiFa.append(xing.split("|")[3].strip())
    yiFa.append(xing.split("|")[4].strip())
    
    for ci in yiFa:
      if ci != '':
        xing = xing.replace(ci, "{0} ({1})".format(ci, PinYin.get_pinyin(ci, tone_marks='marks')))
    contents[i] = xing
    
  except:
    pass

f = open("dic_new.textile", "w", encoding="utf8")
for xing in contents:
  #print(xing)
  f.write(xing)
f.close()
