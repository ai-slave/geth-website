---
title: devp2p
description: introduction to the devp2p peer-to-peer networking tool
---

[DevP2P](https://github.com/ethereum/devp2p) is a set of network protocols that form the Ethereum peer-to-peer network. The DevP2P specifications define precisely how nodes should find each other and communicate. Geth implements the DevP2P specifications in Go.

The DevP2P stack includes the low-level peer-to-peer protocols that define discovery and secure sessions between nodes such as:

- [Ethereum Node Records](https://github.com/ethereum/devp2p/blob/master/enr.md): A standard format for connectivity information for a node
- [Discovery protocol](https://github.com/ethereum/devp2p/blob/master/discv4.md): Defines how nodes find each other.
- [RLPx protocol](https://github.com/ethereum/devp2p/blob/master/rlpx.md): Defines a TCP based transport system for communication between nodes.

DevP2P also includes the RLPx-based application level protocols including:

- [Ethereum Wire Protocol](https://github.com/ethereum/devp2p/blob/master/caps/eth.md): facilitates exchange of blockchain data between peers
- [Ethereum Snapshot Protocol](https://github.com/ethereum/devp2p/blob/master/caps/snap.md): enables exchange of snapshots between peers
- [Light Ethereum Subprotocol](https://github.com/ethereum/devp2p/blob/master/caps/les.md): protocol used by light clients

To debug and develop these networking components, Geth includes a command line tool called `devp2p`.

This page will outline some of `devp2p`s built-in tools.

## ENR Decoding {#enr-decoding}

Ethereum Node Records can be decoded, verified and displayed to the terminal using `enrdump`. It takes the ENR in its encoded form, which is the base64 encoding of its RLP representation. A decoded human-readable text representation is displayed.

Use `devp2p enrdump <base64>` to verify and display an Ethereum Node Record.

The following is an example of the data returned by `enrdump`:

```terminal
./devp2p enrdump "enr:-J24QG3pjTFObcDvTOTJr2qPOTDH3-YxDqS47Ylm-kgM5BUwb1oD5Id6fSRTfUzTahTa7y4TWx_HSV7wri7T6iYtyAQHg2V0aMfGhLjGKZ2AgmlkgnY0gmlwhJ1a19CJc2VjcDI1NmsxoQPlCNb7N__vcnsNC8YYkFkmNj8mibnR5NuvSowcRZsLU4RzbmFwwIN0Y3CCdl-DdWRwgnZf" Node ID: 001816492db22f7572e9eea1c871a2ffe75c28162a9fbc5a9d240e480a7c176f URLv4: ./devp2p enrdump  "enr:-J24QG3pjTFObcDvTOTJr2qPOTDH3-YxDqS47Ylm-kgM5BUwb1oD5Id6fSRTfUzTahTa7y4TWx_HSV7wri7T6iYtyAQHg2V0aMfGhLjGKZ2AgmlkgnY0gmlwhJ1a19CJc2VjcDI1NmsxoQPlCNb7N__vcnsNC8YYkFkmNj8mibnR5NuvSowcRZsLU4RzbmFwwIN0Y3CCdl-DdWRwgnZf"
Node ID: 001816492db22f7572e9eea1c871a2ffe75c28162a9fbc5a9d240e480a7c176f
URLv4:   enode://e508d6fb37ffef727b0d0bc618905926363f2689b9d1e4dbaf4a8c1c459b0b534dcdf84342b78250a6dc013c9ee9f89d095d7a6d1ef0c5f4c57a083b22c557ef@157.90.215.208:30303
Record has sequence number 7 and 7 key/value pairs.
  "eth"       c7c684b8c6299d80
  "id"        "v4"
  "ip"        157.90.215.208
  "secp256k1" a103e508d6fb37ffef727b0d0bc618905926363f2689b9d1e4dbaf4a8c1c459b0b53
  "snap"      c0
  "tcp"       30303
  "udp"       30303
```

Read more on [Ethereum Node Records](https://ethereum.org/en/developers/docs/networking-layer/network-addresses/#enr) or browse the [specs](https://github.com/ethereum/devp2p/blob/591edbd36eb57280384d07373a818c00bddf3b31/enr.md).

## Node Key Management {#node-key-management}

The `devp2p key ...` command family deals with node key files.

Run `devp2p key generate mynode.key` to create a new node key in the `mynode.key` file.

Run `devp2p key to-enode mynode.key -ip 127.0.0.1 -tcp 30303` to create an enode:// URL corresponding to the given node key and address information.

## Maintaining DNS Discovery Node Lists {#maintaining-dns-discovery-lists}

The devp2p command can create and publish DNS discovery node lists.

Run `devp2p dns sign <directory>` to update the signature of a DNS discovery tree.

Run `devp2p dns sync <enrtree-URL>` to download a complete DNS discovery tree.

Run `devp2p dns to-cloudflare <directory>` to publish a tree to CloudFlare DNS.

Run `devp2p dns to-route53 <directory>` to publish a tree to Amazon Route53.

More information about these commands can be found in the [DNS Discovery Setup Guide](/docs/developers/dns-discovery-setup).

## Node Set Utilities {#node-set-utilities}

There are several commands for working with JSON node set files. These files are generated by the discovery crawlers and DNS client commands. Node sets also used as the input of the DNS deployer commands.

Run `devp2p nodeset info <nodes.json>` to display statistics of a node set.

Run `devp2p nodeset filter <nodes.json> <filter flags...>` to write a new, filtered node set to standard output. The following filters are supported:

- `-limit <N>` limits the output set to N entries, taking the top N nodes by score
- `-ip <CIDR>` filters nodes by IP subnet
- `-min-age <duration>` filters nodes by 'first seen' time
- `-eth-network <mainnet/goerli/sepolia>` filters nodes by "eth" ENR entry
- `-les-server` filters nodes by LES server support
- `-snap` filters nodes by snap protocol support

For example, given a node set in `nodes.json`, you could create a filtered set containing up to 20 eth mainnet nodes which also support snap sync using this command:

```sh
devp2p nodeset filter nodes.json -eth-network mainnet -snap -limit 20
```

## Discovery v4 Utilities {#discovery-v4-utilities}

The `devp2p discv4 ...` command family deals with the [Node Discovery v4](https://github.com/ethereum/devp2p/tree/master/discv4.md) protocol.

Run `devp2p discv4 ping <enode/ENR>` to ping a node.

Run `devp2p discv4 resolve <enode/ENR>` to find the most recent node record of a node in the DHT.

Run `devp2p discv4 crawl <nodes.json path>` to create or update a JSON node set.

## Discovery v5 Utilities {#discovery-v5-utilities}

The `devp2p discv5 ...` command family deals with the [Node Discovery v5](https://github.com/ethereum/devp2p/tree/master/discv5/discv5.md) protocol. This protocol is currently under active development.

Run `devp2p discv5 ping <ENR>` to ping a node.

Run `devp2p discv5 resolve <ENR>` to find the most recent node record of a node in the discv5 DHT.

Run `devp2p discv5 listen` to run a Discovery v5 node.

Run `devp2p discv5 crawl <nodes.json path>` to create or update a JSON node set containing discv5 nodes.

## Discovery Test Suites {#discovery-test-suites}

The devp2p command also contains interactive test suites for Discovery v4 and Discovery v5. To run these tests a networking environment must be set up with two separate UDP listening addresses are available on the same machine. The two listening addresses must also be routed such
that they are able to reach the node you want to test.

For example, to run the test on the local host when the node under test is also on the local host, assign two IP addresses (or a larger range) to the loopback interface. On macOS, this can be done by executing the following command:

```sh
sudo ifconfig lo0 add 127.0.0.2
```

Either test suite can then be run as follows:

1. Start the node under test first, ensuring that it won't talk to the Internet (i.e. disable bootstrapping). An easy way to prevent unintended connections to the global DHT is listening on `127.0.0.1`.

2. Get the ENR of the node and store it in the `NODE` environment variable.

3. Start the test by running `devp2p discv5 test -listen1 127.0.0.1 -listen2 127.0.0.2 $NODE`.

## Eth Protocol Test Suite {#eth-protocol-test-suite}

The Eth Protocol test suite is a conformance test suite for the [eth protocol](https://github.com/ethereum/devp2p/blob/master/caps/eth.md).

To run the eth protocol test suite, the node needs to be initialized as follows:

1. initialize the Geth node with the `genesis.json` file contained in the `testdata` directory
2. import the `halfchain.rlp` file in the `testdata` directory
3. run Geth with the following flags:

```sh
geth --datadir <datadir> --nodiscover --nat=none --networkid 19763 --verbosity 5
```

Then, run the following command, replacing `<enode>` with the enode of the Geth node:

```sh
devp2p rlpx eth-test <enode> cmd/devp2p/internal/ethtest/testdata/chain.rlp cmd/devp2p/internal/ethtest/testdata/genesis.json
```

Repeat the above process (re-initialising the node) in order to run the Eth Protocol test suite again.

### Eth66 Test Suite {#eth66-test-suite}

The Eth66 test suite is also a conformance test suite for the eth 66 protocol version specifically. To run the eth66 protocol test suite, initialize a Geth node as described above and run the following command, replacing `<enode>` with the enode of the Geth node:

```sh
devp2p rlpx eth66-test <enode> cmd/devp2p/internal/ethtest/testdata/chain.rlp cmd/devp2p/internal/ethtest/testdata/genesis.json
```

## Summary {#summary}

This page introduced the DevP2P stack that defines Ethereum's peer-to-peer network and the `devp2p` command line tool that comes bundled with Geth. The `devp2p` tools enables Geth developers to work on the peer-to-peer network.
