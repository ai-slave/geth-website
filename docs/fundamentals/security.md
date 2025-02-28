---
title: Security
description: A primer on Geth security best practice.
---

## Downloading Geth {#downloading-geth}

Download Geth using the links on the [Downloads](/downloads) page. The SHA256 hashes of the downloaded files can be used to confirm precise consistency with our releases. This protects against malicious code being inadvertently downloaded from an adversarial source. The same measures should also be taken to download trusted consensus client software.

## Networking security {#networking-security}

The local machine's firewall settings should:

- Block all traffic to `8545`, or whatever custom port has been defined for JSON-RPC requests to the node, except for traffic from explicitly defined trusted machines.
- Allow traffic on `TCP 30303` or whichever custom port has been defined for peer-to-peer communications. This allows the node to connect to peers.
- Allow traffic on `UDP 30303` or whichever custom port has been defined for peer-to-peer communications. This allows node discovery.

## Account security {#account-security}

Account security comes down to keeping private keys and account passwords backed up and inaccessible to adversaries. This is something that users take responsibility for. Geth provides an encrypted store for keys that are unlocked using an account password. If the key files or the passwors are lost, the account is impossible to access and the funds are effectively lost forever. If access to the unencrypted keys is obtained by an adversary they gain control of any funds associated with the account.

Geth has built-in account management tools. However, Clef is recommended as an external account management and signing tool. It can be run decoupled from Geth and can even be run on dedicated secure external hardware such as a VM or a secure USB drive. This is considered best practise because the user is required to manually review all actions that touch sensitive data, except where specific predefined rules are implemented. Signing is done locally to Clef rather than giving key access to a node. Geth's built-in management tools are intended to be deprecated in the near future.

**Back up your keystore and passwords safely and securely!**

## Other security considerations {#other-security}

Even with a perfectly secure node, users can still be manipulated by attackers into exposing security weaknesses or inadvertently interact with insecure smart contracts. For an overview, please see the Ethereum [security best practise webpage](https://ethereum.org/en/security) and this introduction to [smart contract security](https://ethereum.org/en/developers/docs/smart-contracts/security).
