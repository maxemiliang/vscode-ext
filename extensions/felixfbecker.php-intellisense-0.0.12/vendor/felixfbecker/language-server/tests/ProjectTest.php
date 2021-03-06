<?php
declare(strict_types = 1);

namespace LanguageServer\Tests\Server;

use PHPUnit\Framework\TestCase;
use LanguageServer\Tests\MockProtocolStream;
use LanguageServer\{Server, Client, LanguageClient, Project, PhpDocument};
use LanguageServer\Protocol\{
    TextDocumentItem,
    TextDocumentIdentifier,
    SymbolKind,
    DiagnosticSeverity,
    FormattingOptions,
    ClientCapabilities
};
use AdvancedJsonRpc\{Request as RequestBody, Response as ResponseBody};
use function LanguageServer\pathToUri;

class ProjectTest extends TestCase
{
    /**
     * @var Project $project
     */
    private $project;

    public function setUp()
    {
        $client = new LanguageClient(new MockProtocolStream, new MockProtocolStream);
        $this->project = new Project($client, new ClientCapabilities);
    }

    public function testGetOrLoadDocumentLoadsDocument()
    {
        $document = $this->project->getOrLoadDocument(pathToUri(__FILE__))->wait();

        $this->assertNotNull($document);
        $this->assertInstanceOf(PhpDocument::class, $document);
    }

    public function testGetDocumentReturnsOpenedInstance()
    {
        $document1 = $this->project->openDocument(pathToUri(__FILE__), file_get_contents(__FILE__));
        $document2 = $this->project->getDocument(pathToUri(__FILE__));

        $this->assertSame($document1, $document2);
    }
}
