{
  description = "rcerc’s site";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  outputs = { nixpkgs, ... }: {
    devShell = nixpkgs.lib.genAttrs [ "aarch64-linux" "x86_64-linux" ] (system:
      let pkgs = import nixpkgs { inherit system; };
      in pkgs.mkShell {
        packages = [
          (pkgs.nodejs.override { enableNpm = false; })
          pkgs.nodePackages.npm
        ];
      });
  };
}
