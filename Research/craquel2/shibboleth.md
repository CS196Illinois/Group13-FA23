# Shibboleth
I have spent too long trying to build the necessary libraries to run the Shibboleth service provider locally on my computer, as many of them are not packaged by my package manager. I don't plan on giving up but for now I do have a very minimal setup at <https://craquel2.web.illinois.edu>. Anyone accessing the website is prompted to log in with Shibboleth which gives them a `_shibsession_` cookie that allows them to skip login the next time they visit the site. This probably will work, but if we have a different desired configuration, we made need to set it up manually. Regardless, we can store information about the user when they log in. That setup looks like this in the `.htaccess` file:
```
AuthType Shibboleth
ShibRequestSetting requireSession 1
ShibRequestSetting shibUseEnvironment 1 # Pass returned attributes as environment vars
Require shib-session
```
I'm not sure what exactly those attributes are. TBD.

Right now the biggest roadblock is getting the software on my own device, since that is such a struggle this next week I'll have more time to tinker around, either by actually getting it working on my own machine in my current distro, or by spinning up a VM with a distro with all of the necessary packages. The documentation is rich, or at least rich enough for our use case, so the following total steps remain:

1. Set up a Service Provider (basically get software running on my end, since defaults are provided)
2. Connect attributes into our code environment (Shibboleth docs will be incredibly helpful here)
3. Configure Shibboleth logout behavior (Knowledge Base has a page on this)
