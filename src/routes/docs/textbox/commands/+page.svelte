<!-- Page title -->
<svelte:head>
    <title>Docs &gt; Textbox &gt; Commands &ndash; Freckle</title>
</svelte:head>

<h1>Textbox <code>{"${commands}"}</code></h1>
<p>More, such as <code>{"${speed:amount}"}</code>, coming soon.</p>
<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Structure</th>
            <th style="width: 30rem;">Info</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>Reset</td>
            <td><code>{"${reset}"}</code></td>
            <td>Resets the styling of the following text. Takes no arguments.</td>
            <td><code>{"${reset}"}</code></td>
        </tr>
        <tr>
            <td>Color</td>
            <td><code>{"${color:color}"}</code></td>
            <td>
                Changes the color of the following text.
                <br><br>
                Arguments:
                <ol>
                    <li><code>color</code>: A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank">CSS color</a> like <code>red</code> or <code>#ffffff</code>.</li>
                </ol>
            </td>
            <td><code>{"${color:red}"}</code></td>
        </tr>
        <tr>
            <td>Shake</td>
            <td><code>{"${shake:strength}"}</code></td>
            <td>
                Makes the following text shake/tremble.
                <br><br>
                Arguments:
                <ol>
                    <li><code>strength</code>: An integer (whole number) like <code>1</code>.</li>
                </ol>
            </td>
            <td><code>{"${shake:1}"}</code></td>
        </tr>
        <tr>
            <td>Glow</td>
            <td><code>{"${glow:strength,radius,color}"}</code></td>
            <td>
                Applies a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow">CSS <code>drop-shadow()</code></a> filter (optionally several times). In other words, it makes text glow.
                Made so you can do <a href="https://www.reddit.com/r/Undertale/comments/x80a77/guguys_whats_going_on_what_should_i_do/" target="_blank">this</a>.
                <br><br>
                Arguments:
                <ol>
                    <li><code>strength</code>: An integer (whole number) like <code>10</code>. Specifies how many times the drop shadow effect will be drawn.</li>
                    <li><code>radius</code>: The drop shadow radius, eg. <code>4px</code>. See <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length">CSS length</a>.</li>
                    <li><code>color</code>: A <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank">CSS color</a> like <code>red</code> or <code>#ffffff</code>.</li>
                </ol>
            </td>
            <td><code>{"${glow:10,4px,red}"}</code></td>
        </tr>
    </tbody>
</table>
