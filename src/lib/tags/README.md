#Tags
##Simple metadata reader, based in ffprobe

This should define a node library to read metadata from audio files, and
spit it out as *json* encoded.

Currently, it uses *ffprobe* as a backend, but this is likely to change, as
*ffprobe*'s output is not easy to parse/customize.

Maybe *GStreamer* could be a good backend?

***TODO***
1. Enhance backend
2. Use a cache system to speed up metadata reading.
3. Database persistence?
