TEMPLATE=template.html

OUTDIR=output
INPUT=$(filter-out $(TEMPLATE),$(wildcard *.html *.htm))
OUTPUT=$(patsubst %,$(OUTDIR)/%,$(INPUT))

COPYSRC=$(wildcard *.png) css js img
COPYDST=$(patsubst %,$(OUTDIR)/%,$(COPYSRC))

all: $(OUTDIR) $(OUTPUT) $(COPYDST)

$(OUTDIR):
	mkdir $(OUTDIR)

$(OUTDIR)/%.html: %.html $(TEMPLATE)
	./simple-templater $(TEMPLATE) $< $@

$(OUTDIR)/%.htm: %.htm $(TEMPLATE)
	./simple-templater $(TEMPLATE) $< $@
 
$(OUTDIR)/%: %
	cp -r $< $@
