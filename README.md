# Hashink Subgraph
Hashink subgraph repository.

## Get user NFT collection

```
{  
  autographs(where:{owner:"0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"}) {
    id
    creator
    imageURI
    metadataURI
  }
}
```

## NFT collection by creator

```
{  
  autographs(where:{creator:"0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc"}) {
    id
    owner
    imageURI
    metadataURI
  }
}
```
