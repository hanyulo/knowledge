## Example
```
aws cloudfront create-invalidation --distribution-id E2RE5FZJI8MX89 --paths "/taiwanese-businessman/beijing-cover.jpg"


```

```

aws cloudfront create-invalidation --distribution-id E2RE5FZJI8MX89 --paths "/recall-vote-han-kuo-yu/content.json" "/recall-vote-han-kuo-yu/takeaway.json"

```

```

aws cloudfront create-invalidation --distribution-id E27DCD41HD0CFS --paths "/*"

```

## References
* https://docs.aws.amazon.com/cli/latest/reference/cloudfront/create-invalidation.html
* https://docs.aws.amazon.com/cli/latest/reference/index.html
* https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidating-objects-api
* https://stackoverflow.com/questions/37759949/aws-cli-cloudfront-invalidate-all-files
