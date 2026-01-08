
import re

file_path = 'layout/theme.liquid'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace href="css/..." -> href="{{ '...' | asset_url }}"
# Careful not to match http links if they accidentally start with css/ (unlikely but safe to be specific)
# We assume the paths are relative like "css/style.css"
content = re.sub(r'href="css/([^"]+)"', r'href="{{ \'\1\' | asset_url }}"', content)

# Replace src="js/..."
content = re.sub(r'src="js/([^"]+)"', r'src="{{ \'\1\' | asset_url }}"', content)

# Replace src="images/..."
content = re.sub(r'src="images/([^"]+)"', r'src="{{ \'\1\' | asset_url }}"', content)

# Replace href="images/..." (favicons etc)
content = re.sub(r'href="images/([^"]+)"', r'href="{{ \'\1\' | asset_url }}"', content)

# Replace href="fonts/..."
content = re.sub(r'href="fonts/([^"]+)"', r'href="{{ \'\1\' | asset_url }}"', content)

# Replace content="images/..." (meta tags)
content = re.sub(r'content="images/([^"]+)"', r'content="{{ \'\1\' | asset_url }}"', content)

# Replace url("fonts/...") in css/style blocks
content = re.sub(r'url\("fonts/([^"]+)"\)', r'url({{ \'\1\' | asset_url }})', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
