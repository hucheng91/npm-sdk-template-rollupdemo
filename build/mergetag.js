
const execa = require('execa');
const version = require("../package.json").version;
module.exports.start = async function () {
  execa.shell(`git add CHANGELOG.md `)
  execa.shell(`git commit -am "changelog:update changelog `)
  execa.shell(`git commit -am "release: ${version} `)
  execa.shell(`git push origin master `)
  console.log(`git tag -a ${version}`);
  try {
    await execa.shell(`git tag -a ${version} -m " version ${version}" `)
  } catch (error) {
    console.log("tag  失败, git log:", error)
    return Promise.reject(false);
  }

  console.log("tag push to gitlab");
  try {
    await execa.shell(`git push origin refs/tags/${version}`)
    execa.shell(`git push `)
  } catch (error) {
    console.log("tag  push 失败,tag已经存在,不能发布")
    return Promise.reject(false);
  }
  return Promise.resolve(true);
}


