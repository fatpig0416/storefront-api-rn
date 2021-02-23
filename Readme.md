# Storefront api wrapper for ReactNative

```sh
$ yarn add @fatpig0416/storefront-api-rn
```

# Configure wrapper
```
  import { createApiClient } from '@fatpig0416/storefront-api-rn'

  useEffect(() => {
    createApiClient({ api: 'YOUR-GRAPHQL-ENDPOINT })
  }, [])
```
# Use APIs
```
  import { useProducts } from '@fatpig0416/storefront-api-rn'

  const { loading, data } = useProducts()
```

```
  import { useProduct } from '@fatpig0416/storefront-api-rn'

  const { loading, data } = useProduct(22)
```

```
  import { useCategories } from '@fatpig0416/storefront-api-rn'

  const { loading, data } = useCategories()
```

```
  import { useCategory } from '@fatpig0416/storefront-api-rn'

  const { loading, data } = useCategory(22)
```