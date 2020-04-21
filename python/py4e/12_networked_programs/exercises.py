import requests
r = requests.get('https://sites.google.com/cdc.gov.tw/2019ncov/taiwan', auth=('user', 'pass'))
r.status_code

print(r.text)
