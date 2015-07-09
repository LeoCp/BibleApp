module.exports = "bible --help"
        + "\n" + "usage: bible [options] [reference1, reference2, ...]"
        + "\n" + ""
        + "\n" + "Bible.JS CLI client. Read the Holy Bible via the command line."
        + "\n" + ""
        + "\n" + "options:"
        + "\n" + "  --v, --version          prints the tool and the Bible.JS version."
        + "\n" + "  --lang, --language      sets the language."
        + "\n" + "  --onlyVerses            doesn't display the table, just the verses."
        + "\n" + "  --s, --search           gets the verses that match to the string or"
        + "\n" + "                          regular expression provided."
        + "\n" + "  --rc, --resultColor     sets the result color when searching something."
        + "\n" + "  -h --help               prints this output."
        + "\n" + ""
        + "\n" + "references:"
        + "\n" + " - References separated by spaces (see the examples)."
        + "\n" + ""
        + "\n" + "examples:"
        + "\n" + "   bible --lang en 'John 1:1-10' 'Genesis 2:3-7'"
        + "\n" + "   bible --lang ro --search 'Meroza'"
        + "\n" + "   bible --lang ro --search '/Meroza/gi'"
        + "\n" + ""
        + "\n" + "When the module is initialized, the packages listed in configuration file,"
        + "\n" + "are downloaded and used (~/.bible directory).  The configuration is stored"
        + "\n" + "in a JSON file, in the home directory: ~/.bible-config.json"
        + "\n" + ""
        + "\n" + "If this doesn't exist, it's created at the first `bible` call."
        + "\n" + ""
        + "\n" + "You can create custom packages, including them there (in  the `versions`"
        + "\n" + "field). The additional configuration fields are listed below:"
        + "\n" + ""
        + "\n" + " - `language`: a string representing the default language (if this is set,"
        + "\n" + "               `--lang`  is not needed anymore unless you want to override"
        + "\n" + "               the language value)"
        + "\n" + ""
        + "\n" + " - `resultColor`: a string  representing  the  default  result color  when"
        + "\n" + "                  searching    something   (if  this  is  set,  `--rc`  or"
        + "\n" + "                  `--resultColor`  options are not needed anymore unless"
        + "\n" + "                  you want to override the `resultColor` value)"
        + "\n" + ""
        + "\n" + " - `searchLimit`: an integer representing max number of verses that will be"
        + "\n" + "                  output when searching something"
        + "\n" + ""
        + "\n" + ""
        + "\n" + "Documentation can be found at https://github.com/BibleJS/BibleApp"
        ;