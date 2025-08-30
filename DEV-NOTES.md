# Dev Notes

If you see a Webpack cache rename error like:
```
Error: ENOENT: no such file or directory, rename '.next\cache\webpack\client-development-fallback\0.pack.gz_' -> '.next\cache\webpack\client-development-fallback\0.pack.gz'
```
Clear the build cache and restart:
```powershell
Remove-Item -Recurse -Force .\.next
npm run dev:light
```
