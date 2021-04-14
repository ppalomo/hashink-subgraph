# subgraph
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
