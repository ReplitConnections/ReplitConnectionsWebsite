export function Github({ username }: { username: string }) {
  return (
    <a href={`https://github.com/${username}`} target="_blank">
      @{username}
    </a>
  );
}
