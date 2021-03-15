#!/bin/bash

# Get the value of a variable set in the file `.env`
function get_env() {
    grep "^$1=" .env | sed "s/$1=//;s/\s*#.*//"
}

# Manage the creation of a release and hotfix branches
function git-flow() {
    right_branch="$2"
    prefix="$3"
    current_branch="$(git rev-parse --abbrev-ref HEAD)"
    if [[ "$current_branch" != "$right_branch" ]]; then
        >&2 echo "You need to be on the \"$right_branch\" branch to make a $prefix."
        return 1
    fi
    file="$1"

    version=$(grep '"version": "' package.json | sed -e 's/"version": "\(.*\)",/\1/')
    version=$(( $version + 1 ))

    if git diff-index --quiet HEAD -- ; then
        dirty=0
    else
        dirty=1
        git stash
    fi
    sed -i "s/__version__ = \".*\"/__version__ = \"$version\"/" "$file"

    echo "Enter the suffix part of the branch. A new branch named \"$prefix/suffix\" will be created. Or press enter to use the default name."
    echo -n "$prefix/v[$version]: "
    read -r suffix
    if [[ -z $suffix ]]; then
        suffix=v"$version"
    fi

    git checkout -b "$prefix/$suffix"
    sed -i "/^## \\[Unreleased\\]/a \
        ## [$version] - $(date +%F)" CHANGELOG.md
    sed -i '/^## \[Unreleased\]/G' CHANGELOG.md
    git add CHANGELOG.md $file
    git commit -m "Bump version to $version"
    if [[ $dirty == 1 ]]; then
        git stash pop
    fi
}

function release() {
    git-flow "$1" develop release
}

function hotfix() {
    git-flow "$1" master hotfix
}

case "$1" in
    "open")
        project=$(get_env HEROKU_PROJECT_NAME)
        heroku open -a project
        ;;
	"heroku-shell")
	    project=$(get_env HEROKU_PROJECT_NAME)
        heroku run bash -a project
        ;;
    "heroku")
        project=$(get_env HEROKU_PROJECT_NAME)
        heroku ${@:2} -a project
        ;;

    "test")
        ;;

    "release")
        release package.json
        ;;

    "hotfix")
        hotfix packages.json
        ;;

    "update")
        ;;

    "run")
        npm run serve
        ;;
esac
