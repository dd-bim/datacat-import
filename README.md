# datacat import CLI

This project presents an example of a very simple import routine.
It is based on the CLI library [Gluegun](https://infinitered.github.io/gluegun/#/) to simplify input / output logic. Please follow the documentation of Gluegun to learn how to use this tool.

The following commands are supported:

* `datacat-import login` to login to a choosen datacat API.
* `datacat-import prepare` to import tool specific tags that all imported concepts will be decorated with.
* `datacat-import import` to import concepts structured after a simple Excel template (based on ISO 23386).
* `datacat-import purge` to remove all imported concpets (tagged as described above) from the catalog.
