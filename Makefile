TEMPLATE=template.html

OUTDIR=dist
INPUT=$(filter-out $(TEMPLATE),$(wildcard *.html *.htm))
OUTPUT=$(patsubst %,$(OUTDIR)/%,$(INPUT))

COPYSRC=$(wildcard *.png) css js img robots.txt sitemap.xml favicon.ico bower_components
COPYDST=$(patsubst %,$(OUTDIR)/%,$(COPYSRC))

all: $(OUTDIR) $(OUTPUT) $(COPYDST)

$(OUTDIR):
	mkdir $(OUTDIR)

$(OUTDIR)/%.html: %.html $(TEMPLATE)
	./simple-templater $(TEMPLATE) $< $@

$(OUTDIR)/%.htm: %.htm $(TEMPLATE)
	./simple-templater $(TEMPLATE) $< $@
 
$(OUTDIR)/%: %
	rm -fr $@
	cp -r $< $@
